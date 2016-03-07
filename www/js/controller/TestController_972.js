module.exports= function($scope, $state, TestService){
		console.log('enter controller_972')
		$scope.test = TestService.getTest()
	}
