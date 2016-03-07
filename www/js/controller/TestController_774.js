module.exports= function($scope, $state, TestService){
		console.log('enter controller_774')
		$scope.test = TestService.getTest()
	}
