module.exports= function($scope, $state, TestService){
		console.log('enter controller_202')
		$scope.test = TestService.getTest()
	}
